import { HeaderLayout } from '~/components/Layouts'

// Pages
import Home from '~/pages/home'
import Following from '~/pages/following'
import Profile from '~/pages/profile'
import Upload from '~/pages/upload'
import Search from '~/pages/search'

// public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderLayout },
  { path: '/search', component: Search, layout: null }
]

// private routes
const privateRoutes = []

export { publicRoutes, privateRoutes }