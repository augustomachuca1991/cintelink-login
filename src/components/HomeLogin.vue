<template>
	<div class="login">
		<div class="container pt-5">
			<div class="card card-container mx-auto pt-3 pb-4 rounded-lg" style="width: 18rem; border-radius: 10px">
				<img src="@/img/logo.png" alt="Logo cintelink" class="mx-5 my-3 px-2" />
				<form class="p-3 needs-validation">
					<div class="form-group mb-3">
						<input type="text" v-model="state.username" class="form-control text-smaller border-0 input-gray" :class="{ 'is-invalid': v$.username.$error }" id="exampleInputusername1" placeholder="Usuario" />
						<div v-if="v$.username.$error" class="invalid-feedback derecha xsmaller">
							{{ v$.username.$errors[0].$message }}
						</div>
					</div>
					<div class="form-group mb-3">
						<input type="password" v-model="state.password" class="form-control text-smaller border-0 input-gray" :class="{ 'is-invalid': v$.password.$error }" id="exampleInputPassword1" placeholder="Contraseña" />
						<div v-if="v$.password.$error" class="invalid-feedback derecha xsmaller">
							{{ v$.password.$errors[0].$message }}
						</div>
					</div>
					<button type="button" @click="submitForm" class="btn btn-info rounded-pill mt-3 mb-2 text-sm text-white px-4" style="background-color: #2d9cdb !important; font-size: small">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="11">
							<path
								d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zM264 408c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48z"
								fill="#ffffff"
								class="color000 svgShape"
							></path>
						</svg>
						<span class="p-2"><b>LOGIN</b></span>
					</button>
				</form>
				<!-- /form -->
				<a href="#" class="forgot-password cyan text-smaller"> ¿Olvidaste tu contraseña? </a>
				<a href="#" class="text-decoration-none alerte-link black text-smaller pb-2"> Crear una cuenta</a>
			</div>
			<!-- /card-container -->
		</div>
	</div>
</template>

<script>
	import useValidate from '@vuelidate/core';
	import { required, minLength, helpers } from '@vuelidate/validators';
	import { reactive, computed } from 'vue';
	export default {
		name: 'HomeLogin',
		props: {
			img: String,
		},
		setup() {
			const state = reactive({
				username: '',
				password: '',
			});

			const rules = computed(() => {
				return {
					username: {
						required: helpers.withMessage('El campo usuario es requerido', required),
						minLength: helpers.withMessage('El nombre de usuario debe tener entre 3 y 20 caracteres', minLength(3)),
					},
					password: {
						required: helpers.withMessage('El campo contraseña es requerido', required),
						minLength: helpers.withMessage('La contraseña debe tener 8 o mas caracteres', minLength(8)),
					},
				};
			});

			const v$ = useValidate(rules, state);

			return {
				state,
				v$,
			};
		},
		methods: {
			submitForm() {
				this.v$.$validate();
				if (!this.v$.$error) {
					var data = new FormData();
					data.append('accion', 'LoginWSUser');
					data.append('user', this.state.username);
					data.append('pass', this.state.password);
					data.append('format', 'json');

					var config = {
						method: 'post',
						url: 'https://cintelink.com.ar/login.mod.php',
						headers: {
							'Content-Type': 'multipart/form-data',
						},
						data: data,
					};

					this.axios(config)
						.then((response) => {
							if (!response.data.error) {
								alert(JSON.stringify(response.data.data));
							} else {
								alert('contraseña o usuario incorrecto');
							}
						})
						.catch((error) => {
							console.log(error);
						});
				}
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.cyan {
		color: #2d9cdb;
	}

	.black {
		color: #000;
	}

	.text-smaller {
		font-size: small;
	}

	.xsmaller {
		font-size: xx-small;
	}
	.input-gray {
		background-color: #e5e5e5;
	}

	.login {
		margin-top: 200px;
	}

	.derecha {
		text-align: left;
	}
</style>
