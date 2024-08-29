import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Team', href: '/users', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '/calendar', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: 'settings' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      <div className="h-screen flex bg-gray-100">
      <Disclosure as="nav" className="w-64 bg-gray-800 h-screen flex flex-col">
  {({ open }) => (
    <>
      <div className="h-16 flex items-center justify-between px-4">
        <div className="flex-shrink-0">
          <img
            className="block h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <div className="md:hidden">
          <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Open sidebar</span>
            {open ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </Disclosure.Button>
        </div>
      </div>
      <div className="flex flex-col flex-grow overflow-y-20">
        <div className="flex flex-col flex-grow mt-5">
          <nav className="flex-1 px-2 pb-4 space-y-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex-shrink-0 p-4 mt-auto">
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-10 w-10 rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </Menu.Button>
          </div>
          <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </>
  )}
</Disclosure>
      </div>
    </>
  )
}
