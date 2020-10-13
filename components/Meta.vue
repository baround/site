<template>
</template>
<script>
export default {  
  props: ['post'],
  head () {
    let post = this.post;
    if(post){
        var meta = {
            title: '',
            description: '',
            image: '',
            url: ''
        };
        var i;
        for (i = 0; i < post.yoast_meta.length; i++) {
            if(post.yoast_meta[i].property === 'og:description'){
                meta.description = post.yoast_meta[i].content;
            } else if(post.yoast_meta[i].property === 'og:title'){
                meta.title = post.yoast_meta[i].content;
            } else if(post.yoast_meta[i].property === 'og:url'){
                meta.url = post.yoast_meta[i].content;
            } else if(post.yoast_meta[i].property === 'og:image'){
                meta.image = post.yoast_meta[i].content;
            }
        }
        var title = meta.title ? meta.title : 'Baround';
        var description = meta.description ? meta.description : 'La guida definitiva ai cocktail bar.';
        var image = meta.image ? meta.image : 'https://be.baround.it/wp-content/uploads/2020/10/chi-siamo.jpg';
        var url = meta.url ? meta.url : 'https://www.baround.it';
    }
    return {
        title: `${title}`,
        meta: [
          {
            hid: 'description',
            name:  'description',
            content: `${description}`
          },
          {
            hid: 'title',
            name:  `title`,
            content: `${title}`
          },
          {
            hid: 'og:type',
            property: 'og:type',
            name:  'og:type',
            content: 'website'
          },
          {
            hid: 'og:url',
            property: 'og:url',
            name:  'og:url',
            content: `${url}`
          },
          {
            hid: 'og:title',
            property: 'og:title',
            name:  'og:title',
            content: `${title}`
          },
          {
            hid: 'og:description',
            property: 'og:description',
            name:  'og:description',
            content: `${description}`
          },
          {
            hid: 'og:image',
            property: 'og:image',
            name:  'og:image',
            content: `${image}`
          },
          {
            hid: 'twitter:card',
            property: 'twitter:card',
            name:  'twitter:card',
            content: `summary_large_image`
          },
          {
            hid: 'twitter:url',
            property: 'twitter:url',
            name:  'twitter:url',
            content: `${url}`
          },
          {
            hid: 'twitter:title',
            property: 'twitter:title',
            name:  'twitter:title',
            content: `${title}`
          },
          {
            hid: 'twitter:description',
            property: 'twitter:description',
            name:  'twitter:description',
            content: `${description}`
          },
          {
            hid: 'twitter:image',
            property: 'twitter:image',
            name:  'twitter:image',
            content: `${image}`
          },
      ]
    }
},
  mounted(){
    console.log(this.post)
  }
  
}
</script>