import { useEffect, useMemo } from 'react'
import { useBox } from 'blackbox.js'

import { appBox, appActions } from '@/contexts/app'

import { compose } from '@/utils/functional'
import { getRandom } from '@/utils/arrays'
import { greetings } from '@/utils/data'

import BaseLayout from '@/layouts/BaseLayout'
import SubjectCard from '@/components/ui/commons/SubjectCard'

export default function IndexPage() {
  const app = useBox(appBox)
  const greeting = useMemo(() => getRandom(greetings), [])
  const activeSubject: Option<API.Subject> = app.subjects[app.active]

  useEffect(() => {
    appActions.load()
  }, [])

  useEffect(() => {
    if (activeSubject) {
      document.title = `CCDash - ${activeSubject.name}`
    } else {
      document.title = 'CCDash'
    }
  }, [app])

  return (
    <BaseLayout>
      <main className="grid lg:grid-cols-4 text-gray-600 max-h-screen overflow-auto">
        <section className="p-8 lg:max-h-screen lg:overflow-auto">
          <div className="mb-8">
            <h1 className="mb-4 text-6xl title">{greeting}!</h1>
            <p>O que temos pra hoje? 🤔</p>
          </div>
          <div className="max-w-[calc(100vw-4rem)] overflow-hidden">
            <div className="flex flex-nowrap overflow-auto gap-4 lg:grid">
              {app.subjects.map((subject, index) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  onClick={compose<void>(
                    () => appActions.setActive(index),
                    () => window.scrollTo({ top: 0, behavior: 'smooth' })
                  )}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="col-span-3 p-8">
          <h1 className="mb-8 text-4xl title">{activeSubject?.name}</h1>
          {activeSubject?.teacher && (
            <div className="mb-8 flex gap-4 items-start">
              <img
                className="w-16 h-16 rounded-full"
                src={activeSubject?.teacher?.profileImage}
                alt={activeSubject?.teacher?.name}
              />
              <div>
                <p>Professor</p>
                <h2 className="text-2xl title">
                  {activeSubject?.teacher?.name}
                </h2>
              </div>
            </div>
          )}
          <div className="mb-8">
            <p className="max-w-[80ch]">{activeSubject?.about}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="mb-4 text-3xl title">Tarefas</h2>
              <div>
                {activeSubject?.tasks.length > 0 ? (
                  activeSubject?.tasks.map((task) => (
                    <div className="border p-5 rounded-lg" key={task.id}>
                      <h2 className="title text-lg">{task.title}</h2>
                      <p>Data de entrega: {task.dueDate}</p>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center border-2 border-dashed rounded-lg">
                    <p>Nenhuma tarefa cadastrada 🐱</p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-3xl title">Materiais</h2>
              {activeSubject?.resources.length > 0 ? (
                <div></div>
              ) : (
                <div className="p-8 text-center border-2 border-dashed rounded-lg">
                  <p>Nenhum material encontrado 😿</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </BaseLayout>
  )
}
