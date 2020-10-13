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
        var title = meta.title ? meta.title : '';
        var description = meta.description ? meta.description : '';
        var image = meta.image ? meta.image : '';
        var url = meta.url ? meta.url : '';

        console.log(title);
        console.log(description);
        console.log(image);
        console.log(url);
    }
    return {
        title: `${title}`,
        meta: [
            {
            hid: 'Site',
            name:  `${title} - Baround`,
            content: `${description}`
            },
            //FB
            { hid: 'og:title', name: 'og:title', content: `${title}` },
            { hid: 'og:description', name: 'og:description', content: `${description}` },
            { hid: 'og:url', name: 'og:url', content: `${url}` },
            { hid: 'og:image', name: 'og:image', content: `${image}` },
            //TWITTER
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        ]
    }
},
  mounted(){
    console.log(this.post)
  }
  
}
</script>