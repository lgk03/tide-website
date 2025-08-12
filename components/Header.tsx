import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from './Image'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import TideLogo from '@/data/tide-logo.svg'

interface HeaderProps {
  isHomepage?: boolean
}

const Header = ({ isHomepage = false }: HeaderProps) => {
  let headerClass = 'flex items-center w-full justify-between py-10'

  if (isHomepage) {
    headerClass += ' text-white'
  } else {
    headerClass += ' bg-white dark:bg-gray-950'
  }

  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <TideLogo width={40} height={40} />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div
              className={`hidden h-6 text-2xl font-semibold sm:block ${
                isHomepage ? 'text-white' : ''
              }`}
            >
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden items-center gap-x-4 sm:flex">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`m-1 font-medium transition-colors ${
                  isHomepage
                    ? 'text-white/90 hover:text-white'
                    : 'hover:text-primary-500 dark:hover:text-primary-400 text-gray-900 dark:text-gray-100'
                }`}
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
