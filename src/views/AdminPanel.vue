<template>

  <div class="max-w-screen-xl bg-gray-950 flex flex-wrap items-center justify-between mx-auto p-4 mt-4">
    <a href="https://flowbite.com/" class="flex items-center">
      <span class="self-center text-lg whitespace-nowrap text-white ml-4">Unsave Product</span>
    </a>
    <div class="w-full md:block md:w-auto">
      <button type="button"
        class="text-white bg-gray-950 border border-white rounded-lg focus:ring-4 focus:ring-blue-300 font-medium text-sm px-7 py-2.5 mr-3">Register</button>
      <button type="button"
        class="text-white bg-green-800 hover:bg-green-700 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium text-sm px-7 py-2.5">Save</button>
    </div>
  </div>

  <section class="body-font overflow-hidden">
    <div class="max-w-screen-xl mx-auto flex flex-wrap py-5 justify-between">
      <div class="lg:w-7/12 w-full mb-6 h-1/2  lg:mb-0 bg-white rounded-lg p-5">
        <form>
          <div class="mb-6">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Title</label>
            <input type="text" id="title"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Short sleeve t-shirt">
          </div>
          <div class="mb-6">
            <label for="desc" class="block mb-2 text-sm font-medium text-gray-900">Description</label>
            <div id="app">
              <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
            </div>
          </div>
        </form>
      </div>
      <div class="lg:w-2/5 w-full  mb-6 lg:mb-0 bg-white rounded-lg p-5">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-6">Product organization</h2>
        <div class="mb-6">
          <label for="categorybutton" class="block mb-2 text-sm font-medium text-gray-900">Product
            Category</label>
          <button id="categorybutton" @click="openCategory"
            class="border text-left border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5">Search
            product categories</button>
          <!-- Dropdown menu -->
          <div id="category" class="hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow">
            <ul class="py-2 text-sm text-gray-700 ">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-blue-100 ">Category A</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-blue-100 ">Category B</a>
              </li>
              <li>
                <a href="#" @click="openModal" class="block text-sm text-blue-600 px-4 py-2 hover:bg-blue-100 ">Add
                  Another Category
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Product
            Brand</label>
          <input type="text" id="brand"
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="e.g., T-Shirt">
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Collections</label>
          <input type="text" id="brand"
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Tags</label>
          <input type="text" id="brand"
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Find or create tags">
        </div>
      </div>
      <div class="lg:w-7/12 w-full mb-6 h-1/2  lg:mb-0 bg-white rounded-lg p-5">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-4">Inventory</h2>
        <div class="flex items-center mb-6">
          <input id="default-checkbox" type="checkbox" v-model="quantity"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ">
          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">Track
            quantity</label>
        </div>
        <div>
          <div class="flex justify-between">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-6">Quantity</h2>
            <p class="text-gray-500 text-sm" :class="{ 'hidden': quantity}">Not tracked</p>
            <input type="number" id="visitors"
              class=" border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 h-10 px-2.5"
              placeholder="" :class="{ 'hidden': !quantity}">
          </div>
          <div class="flex justify-between " :class="{ 'hidden': !quantity}">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-6">Low Quantity Warning</h2>
            <input type="number" id="visitors"
              class="border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 h-10 px-2.5"
              placeholder="">
          </div>
        </div>
        <hr>
        <div class="flex items-center mb-6 mt-4">
          <input id="default-checkbox-sku" type="checkbox" v-model="sku"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ">
          <label for="default-checkbox-sku" class="ml-2 text-sm font-medium text-gray-900 ">This
            product has a SKU or barcode</label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6" :class="{ 'hidden': !sku}">
          <div class="relative z-0 w-full mb-6 group">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900">SKU (Stock Keeping
              Unit)</label>
            <input type="text" id="title"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Barcode (ISBN, UPC,
              GTIN, etc.)</label>
            <input type="text" id="title"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          </div>
        </div>

      </div>
      <div class="lg:w-7/12 w-full mb-6 h-1/2 mt-4 flex justify-end">
        <button type="button"
          class="text-white bg-green-800 hover:bg-green-700 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium text-sm px-7 py-2.5">Save</button>
      </div>

    </div>
  </section>

  <div class="fixed top-0 left-0 z-10 hidden w-full overflow-y-auto" id="modal">
    <div class="flex items-center justify-center px-4 pt-4 pb-20 text-center min-height-100vh sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-black opacity-30" />
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
      <div
        class="inline-block w-full overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl align-center sm:my-8 sm:align-middle sm:w-full lg:w-1/2"
        role="dialog" aria-modal="true" aria-labelledby="modal-headline">

        <form @submit.prevent="submitCategory" class="mt-5" >
          <div class="p-5 bg-white">
            <div class="flex justify-between mb-5 modal-header">
              <h2 class="text-gray-900 text-lg title-font font-medium">Product organization</h2>
            </div>
            <hr>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 mt-4">Category
                Name*</label>
              <input type="text" id="name" v-model="name"
                class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <small class="text-red-600" v-if="errors">{{ errors }}</small>
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Parent
                Category</label>
              <input type="text" id="brand" v-model="parent"
                class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Category Banner
                (200 x 200)</label>
              <!-- component -->
              <div class="bg-white rounded-lg mt-3">
                <div class="file_upload py-7 relative border-4 border-dotted border-gray-300 rounded-lg w-full">
                  <div class="input_field flex flex-col w-max mx-auto text-center">
                    <label>
                      <input class="text-sm cursor-pointer w-36 hidden" type="file" multiple />
                      <div
                        class="text bg-blue-100 text-blue-600 border border-gray-300 rounded cursor-pointer p-1 px-3 ">
                        Add Files</div>
                    </label>

                    <div class="title text-gray-500">Accepts images, videos, or 3D models</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Category Icon (32
                x 32)</label>
              <!-- component -->
              <div class="bg-white rounded-lg mt-3">
                <div class="file_upload py-7 relative border-4 border-dotted border-gray-300 rounded-lg w-full">
                  <div class="input_field flex flex-col w-max mx-auto text-center">
                    <label>
                      <input class="text-sm cursor-pointer w-36 hidden" type="file" multiple />
                      <div
                        class="text bg-blue-100 text-blue-600 border border-gray-300 rounded cursor-pointer p-1 px-3 ">
                        Add Files</div>
                    </label>

                    <div class="title text-gray-500">Accepts images, videos, or 3D models</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="px-4 py-3 text-right modal-footer">
            <button type="button"
              class="text-black bg-white border border-gray-500 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium text-sm px-7 py-2.5 mr-3"
              @click="openModal">Cancel</button>
            <input type="submit" value="Save"
              class="text-white bg-green-800 hover:bg-green-700 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium text-sm px-7 py-2.5">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
  body {
    background-color: #f4f4f4;
  }

  .ck-content {
    height: 200px;
  }
</style>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  export default {
    name: 'app',
    data() {
      return {
        editor: ClassicEditor,
        editorData: '',
        name: '',
        parent: '',
        errors: '',
        sku: false,
        quantity: false,
      };
    },
    methods: {
      openCategory() {
        document.getElementById('category').classList.toggle('hidden')
      },
      openModal() {
        document.getElementById('modal').classList.toggle('hidden')
      },
      submitCategory() {
        if (this.name == "") {
          this.errors = '“category nama” tidak boleh kosong.';
        } else {
          document.getElementById('modal').classList.toggle('hidden')
          alert('Success')
        }
      },
    },
  }
</script>