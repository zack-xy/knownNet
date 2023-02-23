export default defineComponent({
  setup() {
    return () => {
      return (
        <div class="text-center">
          <p>介绍我自己</p>
          <a-avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} alt="Zack" src="https://avatars.githubusercontent.com/u/18522167?s=400&u=0ea0e853657695ce78d2a97d941e3de2f0fb7597&v=4" />
        </div>
      )
    }
  },
})
