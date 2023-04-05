<template>
  <section class="bg-gradient-to-r from-blue-800 from-50% to-yellow-300 to-50%">
    <nav class="bg-transparent">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-yellow-300">Protem.</span>
        </a>
        <button type="button" @click="openNav"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex md:items-center flex-col p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">Home</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">About</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">Features</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">Collection</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">Contact</a>
            </li>
            <li>
              <button type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-7 py-2.5 md:ml-8">Sign
                Up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="text-white body-font overflow-hidden">
      <div class="container py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-wider  md:text-5xl lg:text-6xl">
              Let's Keep Your Data Safe</h1>
            <p class="mb-6 text-base font-normal leading-7">Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in
              sit amet leo. Mauris feugiat erat tellus. Lorem ipsum dolor sit amet.</p>
            <a href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-yellow-300 hover:bg-yellow-400  text-blue-800 focus:ring-4">
              Know More
            </a>

          </div>
          <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded -ml-8"
            src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80">
        </div>


      </div>
    </section>

  </section>

  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container mx-auto ">
      <div class="flex flex-wrap mt-32 ">
        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ml-auto">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-wider text-blue-800 md:text-5xl lg:text-6xl">
            About The Protem</h1>
          <p class="mb-6 text-base font-normal text-gray-500 leading-7">Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in
            sit amet leo. Mauris feugiat erat tellus. Lorem ipsum dolor sit amet.</p>
          <div>
            <a>
              <span
                class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                  class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>First Link
            </a> <br>
            <a>
              <span
                class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                  class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Second Link
            </a>
          </div>
          <a href="#"
            class="inline-flex items-center justify-center px-5 py-3 mt-5 text-base font-medium text-center bg-yellow-300 hover:bg-yellow-400  text-blue-800 focus:ring-4">
            Learn More
          </a>
        </div>
        <img alt="ecommerce" class="lg:w-2/5 w-full ml-auto lg:h-auto h-64 object-cover object-center rounded"
          src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80">
      </div>
    </div>
  </section>

  <section class="text-gray-600 body-font bg-slate-50">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">

        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-wider text-blue-800 md:text-5xl lg:text-6xl">
            Future of The Protem</h1>
          <p class="mb-6 text-base font-normal text-gray-500 leading-7 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit <br> amet leo. Mauris feugiat erat tellus.</p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/2">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <div class="flex-shrink-0 w-32 h-32 sm:mb-0 mb-4 flex items-center justify-center px-6 bg-yellow-300">
                <img alt="storage" src="@/assets/img/storage.png">
              </div>
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-blue-800">Data Stored</h2>
                <p class="mb-4 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                  finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <div class="flex-shrink-0 w-32 h-32 sm:mb-0 mb-4 flex items-center justify-center px-6 bg-yellow-300">
                <img alt="storage" src="@/assets/img/fingerprint.png">
              </div>
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-blue-800">Fingerprint lock</h2>
                <p class="mb-4 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                  finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2 mt-6">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <div class="flex-shrink-0 w-32 h-32 sm:mb-0 mb-4 flex items-center justify-center px-6 bg-yellow-300">
                <img alt="storage" src="@/assets/img/idea.png">
              </div>
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-blue-800">Innovative Idea</h2>
                <p class="mb-4 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                  finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2 mt-6">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <div class="flex-shrink-0 w-32 h-32 sm:mb-0 mb-4 flex items-center justify-center px-6 bg-yellow-300">
                <img alt="storage" src="@/assets/img/protect.png">
              </div>
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-blue-800">Password Protect</h2>
                <p class="mb-4 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                  finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <footer>
    <div class="bg-blue-800">
      <div class="container py-4 px-5">
        <p class="text-white text-sm text-center">© 2021. Protem. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>


<script>
  export default {
    methods: {
      openNav() {
        document.getElementById('navbar-default').classList.toggle('hidden')
      }
    }
  }
</script>