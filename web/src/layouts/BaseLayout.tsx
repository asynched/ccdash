import {
  CalendarIcon,
  ClipboardListIcon,
  HomeIcon,
} from '@heroicons/react/outline'

type BaseLayoutProps = {
  children?: React.ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex">
      <nav className="sticky top-0 py-4 flex flex-col items-center gap-8 w-24 bg-gradient-to-b from-gray-800 to-gray-900 h-screen">
        <button>
          <HomeIcon className="w-8 h-8 text-white" />
        </button>
        <button>
          <ClipboardListIcon className="w-8 h-8 text-white" />
        </button>
        <button>
          <CalendarIcon className="w-8 h-8 text-white" />
        </button>
      </nav>
      {children}
    </div>
  )
}
