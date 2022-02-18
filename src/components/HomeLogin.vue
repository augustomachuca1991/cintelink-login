<template>
  <div class="login">
    <div class="container pt-5">
      <div class="card card-container mx-auto pt-3 pb-4 rounded-lg" style="width: 18rem">
        <img src="@/img/logo.png" alt="Logo cintelink" class="mx-5 my-3 px-2" />
        <form class="p-3">
          <div class="form-group mb-3">
            <input type="email" class="form-control text-smaller border-0 input-gray" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuario" />
          </div>
          <div class="form-group mb-3">
            <input type="password" class="form-control text-smaller border-0 input-gray" id="exampleInputPassword1" placeholder="Contraseña" />
          </div>
          <button type="submit" class="btn btn-info rounded-pill my-3 text-sm text-white px-4" style="background-color: #2d9cdb !important; font-size: small">
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
        <a href="#" class="text-decoration-none alerte-link black text-smaller"> Crear una cuenta</a>
      </div>
      <!-- /card-container -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeLogin",
  props: {
    img: String,
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
.input-gray {
  background-color: #e5e5e5;
}
</style>
