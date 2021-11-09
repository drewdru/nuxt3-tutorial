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
      TestPluginState: {{ testPluginState }}
      <button @click="updateTestPluginState">
        Set to Klington
      </button>
    </div>
    <div>
      {{locale}}: {{t("hello")}}
      <button @click="locale='ru'">ru</button>
      <button @click="locale='en'">en</button>
    </div>
    <div>
      Server response: {{ data }}
    </div>
  </div>
</template>


<script lang="ts">
export default {
  head: {
    title: 'Static title'
  }
}
</script>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
useMeta({
  bodyAttrs: {
    class: 'body'
  }
})
// composables
const a = useA()
const b = useB()
const c = useC()
const d = useD()
const foo = useFoo()
const testPluginState = useState('testPluginState')
const { t, locale } = useI18n()

// data
const dynamic = ref(42)
const { data } = await useFetch('/api/hello', { params: { foo: 'bar' } })

// methods
const updateTestPluginState = () => { testPluginState.value = 'tlh-klingon' }


</script>