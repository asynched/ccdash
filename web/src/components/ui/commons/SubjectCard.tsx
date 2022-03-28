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
      className="p-6 rounded-lg border transition duration-300 ease-in-out hover:shadow-2xl hover:border-transparent cursor-pointer"
      onClick={onClick}
    >
      <h2 className="mb-2 text-xl title">{subject.name}</h2>
      <p className="mb-2 ">{truncateFn(subject.about)}</p>
      {subject.teacher && (
        <p className="mb-2">
          <b>Professor:</b> {subject.teacher?.name}
        </p>
      )}
      <div className="grid grid-cols-2">
        <div className="flex gap-2 items-center">
          <ClipboardListIcon className="w-4 h-4" />{' '}
          <span>{subject.tasks.length}</span>
        </div>
        <div className="flex gap-2 items-center">
          <BookmarkAltIcon className="w-4 h-4" />{' '}
          <span>{subject.resources.length}</span>
        </div>
      </div>
    </a>
  )
}
