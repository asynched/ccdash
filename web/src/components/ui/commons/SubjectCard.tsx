import { truncate } from '@/utils/text'

import { ClipboardListIcon, BookmarkAltIcon } from '@heroicons/react/outline'

type SubjectCardProps = {
  subject: API.Subject
  onClick: () => void
}

const truncateFn = truncate(80)

export default function SubjectCard({ subject, onClick }: SubjectCardProps) {
  return (
    <a
      key={subject.id}
      className="min-w-[16rem] p-6 rounded-lg border transition duration-300 ease-in-out cursor-pointer hover:shadow-2xl hover:border-transparent lg:w-auto"
      onClick={onClick}
    >
      <h2 className="mb-2 text-xl title max-w-[24ch]">{subject.name}</h2>
      <p className="mb-2 hidden md:block">{truncateFn(subject.about)}</p>
      {subject.teacher && (
        <p className="mb-2 hidden lg:block">
          <b className="title">Professor:</b> {subject.teacher?.name}
        </p>
      )}
      <div className="grid grid-cols-2">
        <div className="flex gap-2 items-center">
          <ClipboardListIcon className="w-5 h-5" />{' '}
          <span>{subject.tasks.length}</span>
        </div>
        <div className="flex gap-2 items-center">
          <BookmarkAltIcon className="w-5 h-5" />{' '}
          <span>{subject.resources.length}</span>
        </div>
      </div>
    </a>
  )
}
