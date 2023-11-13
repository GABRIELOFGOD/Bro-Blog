import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom"
import './App.css'

// ============= IMPORTING PAGES AND COMPONENTS ============= //
import Layout from '../components/Layout'
import Container from '../components/Container'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import NewsPage from '../pages/NewsPage'
import ReadBlog from '../pages/ReadBlog'
import Profile from "../pages/Profile"
import Writer from "../pages/Writer"



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: 'blog/business',
            element: <NewsPage />
          },
          {
            path: 'blog/politics',
            element: <NewsPage />
          },
          {
            path: 'blog/lifestyle',
            element: <NewsPage />
          },
          {
            path: 'blog/foreign',
            element: <NewsPage />
          },
          {
            path: 'blog/sport',
            element: <NewsPage />
          },
          {
            path: 'blog/entertainment',
            element: <NewsPage />
          },
          {
            path: '',
            element: <Container />
          },
        ]
      },
      {
        path: 'news/:id',
        element: <ReadBlog />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'writer',
        element: <Writer />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }  
])

function App() {

  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
