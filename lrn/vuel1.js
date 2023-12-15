const app = Vue.createApp(
	{
		data() {return {
			itekst: "Hello World!",
			otekst: "",
			ztrdir: "",
		}},
		methods: {
			itekst_change() {
				this.otekst = i_to_u8hin(this.itekst); //this.itekst.toUpperCase();
			},
			capitalize() {
				this.otekst = i_to_u8hin(this.itekst);//this.itekst.toUpperCase();
			},
		},
	}
) 
app.mount('#app')