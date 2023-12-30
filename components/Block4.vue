<script lang="ts" setup>
import { addDoc, collection } from "firebase/firestore";
import {
  ref as StorageRef,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
const contactForm = ref<{
  name: string;
  email: string;
  role: string;
  message: string;
  phone: string;
  terms: boolean;
  files: File[];
}>({
  name: "",
  email: "",
  role: "",
  phone: "",
  message: "",
  terms: false,
  files: [],
});

const errorSendContact = ref(false);
const contactSent = ref(false);
const sendingContact = ref(false);
const fileOptions = ref({ multiple: true, accept: ".pdf,.docx" });
const { files, open, reset, onChange } = useFileDialog();
onChange((files) => {
  if (files?.length) {
    contactForm.value.files.push(...files);
    reset();
  }
});

const removeFile = (index: number) => {
  if (index > -1) {
    contactForm.value.files.splice(index, 1);
  }
};

const sendContact = async () => {
  sendingContact.value = true;
  errorSendContact.value = false;
  const storage = useNuxtApp().$storage;
  let contactFiles: string[] = [];
  try {
    if (contactForm.value.files.length) {
      await Promise.all(
        contactForm.value.files.map(async (f) => {
          let path = `/contactFiles/${f.name}`;
          const storageRef = StorageRef(storage, path);
          const uploadTask = uploadBytesResumable(storageRef, f);
          uploadTask.on("state_changed", (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            // const progress =
            //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log("Upload is " + progress + "% done");
            // switch (snapshot.state) {
            //   case "paused":
            //     console.log("Upload is paused");
            //     break;
            //   case "running":
            //     console.log("Upload is running");
            //     break;
            // }
          });
          await uploadTask;
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            contactFiles.push(downloadURL);
          });
        })
      );
    }

    await addDoc(collection(useNuxtApp().$firestore, "contacts"), {
      name: contactForm.value.name,
      email: contactForm.value.email,
      role: contactForm.value.role,
      phone: contactForm.value.phone,
      message: contactForm.value.message,
      terms: contactForm.value.terms,
      files: contactFiles,
    });
    resetForm();
  } catch (error) {
    errorSendContact.value = true;
  } finally {
    sendingContact.value = false;
  }
};

const resetForm = () => {
  contactForm.value = {
    name: "",
    email: "",
    role: "",
    phone: "",
    message: "",
    terms: false,
    files: [],
  };
  reset();
};
</script>

<template>
  <div
    class="flex flex-col px-[100px] py-[80px] gap-10 bgBlock4 relative overflow-hidden"
  >
    <div class="inset-0 z-0 absolute bgimg opacity-50"></div>
    <div class="flex flex-col gap-6 z-[1]">
      <div class="flex flex-col gap-[15px]">
        <span class="text-primary font-semibold uppercase leading-[1.25]">
          Compartilhe sua ideia conosco
        </span>
        <h1 class="text-[64px] leading-[1.25] -tracking-[1.92px] font-light">
          Você está a um clique de transformar sua <br />
          <span class="font-bold"> ideia em realidade.</span>
        </h1>
      </div>
      <span class="font-light text-2xl leading-[1.5]">
        Estamos emocionados para iniciar esta jornada transformadora ao seu
        lado. Preencha <br />
        o formulário abaixo e dê o primeiro passo para transformar sua visão em
        realidade.
      </span>
      <div class="flex flex-col gap-[15px]">
        <span class="font-light text-2xl leading-[1.5]">
          Ou se preferir, envie um e-mail para:
        </span>
        <div class="flex items-center gap-4">
          <i class="fi fi-sr-envelope text-2xl h-6"></i>
          <a
            href="mailto:comercial@braxuls.com"
            class="text-2xl font-semibold leading-[1.5]"
          >
            comercial@braxuls.com
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-10 z-[1] max-w-[1024px] relative"
      :class="{
        'opacity-80 pointer-events-none': sendingContact,
      }"
    >
      <div
        v-if="contactSent || errorSendContact"
        class="flex items-center gap-3 px-4 py-2 rounded-lg"
        :class="{
          'bg-primary text-black-700': contactSent,
          'bg-red-600 text-white': errorSendContact,
        }"
      >
        <i class="fi fi-sr-info h-5"></i>
        <span v-if="errorSendContact">
          Erro ao enviar contato, tente novamente!
        </span>
        <span v-else>
          Contato enviado com sucesso! Fique de olho no email!
        </span>
      </div>
      <div class="flex items-center gap-10">
        <input type="text" placeholder="Nome" v-model="contactForm.name" />
        <input type="email" placeholder="Email" v-model="contactForm.email" />
      </div>
      <div class="flex items-center gap-10">
        <input type="text" placeholder="Cargo" v-model="contactForm.role" />
        <input type="tel" placeholder="Telefone" v-model="contactForm.phone" />
      </div>
      <textarea
        rows="6"
        placeholder="Mensagem"
        v-model="contactForm.message"
      ></textarea>
      <div class="flex flex-col gap-5">
        <div class="flex gap-2 items-center">
          <i class="fi fi-sr-document text-xl h-6"></i>
          <span class="font-light leading-[1.5]">Anexos (PDF ou Word)</span>
        </div>
        <div class="flex flex-col gap-[15px]" v-if="contactForm.files.length">
          <div
            class="flex gap-10 items-center"
            v-for="(file, index) in contactForm.files"
          >
            <span>{{ file.name }}</span>
            <button
              @click="removeFile(index)"
              class="hover:text-primary transition-all duration-[.2s]"
            >
              <i class="fi fi-sr-trash text-xl h-6"></i>
            </button>
          </div>
        </div>
        <button
          @click="open(fileOptions)"
          class="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white/80 rounded-[32px] text-black-700 w-fit hover:bg-white duration-[.2s] transition-all hover:scale-[102%]"
        >
          <i class="fi fi-br-plus h-4"></i>
          <span class="font-bold text-sm"> Adicionar </span>
        </button>
      </div>
      <div class="flex items-center gap-2">
        <input
          type="checkbox"
          name=""
          id="terms"
          class="w-fit"
          v-model="contactForm.terms"
        />
        <label
          for="terms"
          class="text-sm leading-[1.5] font-light cursor-pointer"
        >
          Concordo que as informações compartilhadas acima são de uso comercial
          e que a Braxuls pode entrar em contato comigo.
        </label>
      </div>
      <button
        @click="sendContact()"
        class="flex items-center gap-4 px-8 py-3 bg-primary rounded-[32px] text-black-700 w-fit hover:bg-white duration-[.2s] transition-all hover:scale-[102%]"
      >
        <i class="fi fi-ss-rocket-lunch text-xl h-6"></i>
        <span class="font-bold">
          {{
            !sendingContact
              ? "Transformar minha ideia em realidade"
              : "Enviando contato"
          }}
        </span>
      </button>
    </div>
  </div>
</template>

<style>
.bgimg {
  background: url("assets/imgs/bgContact.jpg"),
    lightgray 367.179px 0px / 100.018% 100% no-repeat;
}
.bgBlock4 {
  background-image: linear-gradient(
    112deg,
    #000 0%,
    #323232 48.37%,
    #000 84.82%
  );
}

input,
textarea {
  @apply rounded-lg px-4 py-3 placeholder:text-black-700/75 outline-none w-full text-[#000];
}
</style>
