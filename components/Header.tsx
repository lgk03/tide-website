import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import TideLogo from '@/data/tide-logo.svg'

interface HeaderProps {
  isHomepage?: boolean
}

const Header = ({ isHomepage = false }: HeaderProps) => {
  let headerClass = 'flex items-center w-full justify-between py-4'

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
          <div className="mr-4">
            <TideLogo width={48} height={48} />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className={`hidden text-3xl font-bold sm:block ${isHomepage ? 'text-white' : ''}`}>
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-6 leading-5 sm:space-x-8">
        <div className="no-scrollbar hidden items-center gap-x-6 sm:flex">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`text-lg font-semibold transition-colors ${
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
