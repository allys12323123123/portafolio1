// Types
export type SEOProps = {
 description?: string
 lang?: string
 meta?: Meta
 title: string
}

export type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>

export type PropertyMetaObj = {
 property: string
 content: string
}

export type NameMetaObj = {
 name: string
 content: string
}

export type QueryTypes = {
 site: {
  siteMetadata: {
   title: string
   description: string
   author: string
  }
 }
}
