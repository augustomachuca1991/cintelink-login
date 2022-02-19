<template>
  <div class="login">
    <div class="card card-container pt-3 pb-4 radius">
      <img src="@/img/logo.png" alt="Logo cintelink" class="mx-5 my-3 px-2" />
      <form class="p-3 needs-validation form">
        <div class="form-group mb-3">
          <input type="text" v-model="state.username" class="form-control" :class="{ 'is-invalid': v$.username.$error }" id="usuario" placeholder="Usuario" @keydown.enter="submitForm" />
          <div v-if="v$.username.$error" class="invalid-feedback errorMessage">
            {{ v$.username.$errors[0].$message }}
          </div>
        </div>
        <div class="form-group mb-3">
          <input type="password" v-model="state.password" class="form-control" :class="{ 'is-invalid': v$.password.$error }" id="contraseña" placeholder="Contraseña" @keydown.enter="submitForm" />
          <div v-if="v$.password.$error" class="invalid-feedback errorMessage">
            {{ v$.password.$errors[0].$message }}
          </div>
          <div class="errorMessage" style="color: #dc3545">{{ state.errors }}</div>
          <!-- <div v-if="state.messageError" class="invalid-feedback derecha errorMessage">error</div> -->
        </div>
        <button type="button" @click.prevent="submitForm" class="btn btn-info rounded-pill mt-3 mb-2 text-sm text-white px-4" style="background-color: #2d9cdb !important; font-size: small">
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
      <a href="#" class="text-decoration-none forgot-password" style="color: #2d9cdb; font-size: small"> ¿Olvidaste tu contraseña? </a>
      <a href="#" class="text-decoration-none alerte-link pb-2" style="color: #000; font-size: small"> Crear una cuenta</a>
    </div>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import router from "../router/index";
export default {
  name: "HomeLogin",
  // data() {
  //   return {
  //     errors: "",
  //   };
  // },
  setup() {
    const state = reactive({
      username: "",
      password: "",
      errors: "",
    });

    const rules = computed(() => {
      return {
        username: {
          required: helpers.withMessage("El campo usuario es requerido", required),
          minLength: helpers.withMessage("El nombre de usuario debe tener entre 3 y 20 caracteres", minLength(3)),
        },
        password: {
          required: helpers.withMessage("El campo contraseña es requerido", required),
          minLength: helpers.withMessage("La contraseña debe tener 8 o mas caracteres", minLength(8)),
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
        data.append("accion", "LoginWSUser");
        data.append("user", this.state.username);
        data.append("pass", this.state.password);
        data.append("format", "json");

        var config = {
          method: "post",
          url: "https://cintelink.com.ar/login.mod.php",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: data,
        };

        this.axios(config)
          .then((response) => {
            if (!response.data.error) {
              this.state.errors = "";
              alert(JSON.stringify(response.data.data));
              alert(JSON.stringify("Login Ok"));
              router.push({ path: "/dashboard", component: "<h1>Login Ok</h1>" });
            } else {
              this.state.errors = "Nombre de usuario o contraseña incorrectos";
              // alert("Usuario o contraseña incorrectos");
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
.radius {
  width: 18rem;
  border-radius: 10px;
  margin-top: 250px;
}
.form {
  position: relative;
}

.form input {
  border-radius: 10px;
  outline: none;
  padding: 10px 10px;
  font-size: small;
  background-color: #e5e5e5;
  font-size: 14px;
}

/* .form label {
  position: absolute;
  top: 15px;
  left: 25px;
  font-size: 14px;
  padding: 0 10px;
  transition: top 0.4s;
}
.form input:hover ~ label {
  top: -15px;
  color: cadetblue;
} */

.errorMessage {
  font-size: 10px;
  text-align: left;
  padding: 0 2px;
}

@media (min-width: 600px) {
  #app {
    background-image: url("../img/fondo.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% 100vh;
  }
}

@media (max-width: 599px) {
  #app {
    background-image: none;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .card {
    border: 0;
  }
  .radius {
    width: 100%;
    margin-top: 50%;
  }
}
</style>
