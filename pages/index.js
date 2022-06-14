import Head from 'next/head'
import Image from 'next/image'
import { Flex , Box , Text ,Button} from "@chakra-ui/react"


export const Banner = ({imageUrl })=>{
   return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl } alt = "banner" width={500} height={500}/>
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="bold">kie</Text>
      </Box>

    </Flex>
   )
}

export default function Home() {
  return (
    <div >
      <Banner  imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'/>
      <h1>shaden</h1>
    </div>
  )
}
