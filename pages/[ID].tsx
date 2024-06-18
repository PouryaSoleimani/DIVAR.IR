//^ DYNAMIC PRODUCT DETAILS PAGE =========================================================================================================================================== 
import SingleItem from '@/components/singleItem'
import axios from 'axios'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

interface Props { response: { id: number, title: string, location: string, img: string, price: number, status: string } }
type SingleItemType = { id: number, title: string, location: string, img: string, price: number, status: string }

// COMPONENT
const SingleItemPage: NextPage<Props> = ({ response }) => {
  return (
    <div>
      <SingleItem {...response} />
    </div>
  )
}

//^ STATIC PATHS
export const getStaticPaths: GetStaticPaths = async () => {
  const request = axios.get(`http://localhost:5000/products`)
  const response = (await request).data
  const paths = response.map((item: SingleItemType) => { return { params: { ID: String(item.id) } } })
  return {
    paths: paths,
    fallback: false,
  }
}

//* STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
  const productID = ctx.params?.ID
  const request = axios.get(`http://localhost:5000/products/${productID}`)
  const response = (await request).data

  return {
    props: { response },
  }
}

export default SingleItemPage