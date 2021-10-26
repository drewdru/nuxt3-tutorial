<template>
  <div>
    Home
    <Head :lang="dynamic > 50 ? 'en-GB' : 'en-US'">
      <Title>{{ dynamic }} title</Title>
      <Meta name="description" :content="`My page's ${dynamic} description`" />
      <Link rel="preload" href="/test.txt" as="script" />
    </Head>
    <p>{{ a }}</p>
    <p>{{ b }}</p>
    <p>{{ c }}</p>
    <p>{{ d }}</p>
    <p>{{ foo }}</p>
    <div>
      Locale: {{ locale }}
      <button @click="updateLocale">
        Set to Klington
      </button>
    </div>
    <div>
      Server response: {{ data }}
    </div>
  </div>
</template>


<script>
export default {
  head: {
    title: 'Static title'
  }
}
</script>

<script setup>
useMeta({
  bodyAttrs: {
    class: 'test'
  }
})
// composables
const a = useA()
const b = useB()
const c = useC()
const d = useD()
const foo = useFoo()
const locale = useState('locale')

// data
const dynamic = ref(42)
const { data } = await useFetch('/api/hello', { params: { foo: 'bar' } })

// methods
const updateLocale = () => { locale.value = 'tlh-klingon' }


</script>