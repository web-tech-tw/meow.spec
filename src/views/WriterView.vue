<template>
  <div class="container mx-auto my-5 p-5">
    <textarea
      ref="textarea"
      v-model="content"
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    />
    <div>
      <button
        class="w-full mt-3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-100 bg-violet-700 hover:bg-violet-600 md:py-4 md:text-lg md:px-10"
        @click="onSubmit"
      >
        我打完了
      </button>
      <button
        v-show="!isShowCoder"
        class="w-full mt-3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-700 bg-violet-100 hover:bg-violet-200 md:py-4 md:text-lg md:px-10"
        @click="onClickGoCoder"
      >
        你是工程師嗎？這裡是專業 Coding 模式
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref, watch, computed, onMounted} from "vue";

import {useRouter} from "vue-router";
import {useClient} from "../clients/chew";

const router = useRouter();

const textarea = ref(null);

const content = ref("");

const isShowCoder = computed(() => {
  return window.innerWidth < 768;
});

watch(content, () => {
  if (content.value) {
    window.onbeforeunload = () => true;
  } else {
    window.onbeforeunload = null;
  }
  sessionStorage.setItem(
    "chew-content",
    content.value,
  );
});

/**
 *
 */
function onClickGoCoder() {
  if (content.value && !confirm("確定要離開？")) {
    return;
  }
  router.replace("/coder");
}

/**
 *
 */
async function onSubmit() {
  textarea.value.blur();
  if (!content.value) {
    alert("請輸入內容");
    return;
  }
  if (!confirm("確定要送出？")) {
    return;
  }
  const client = useClient();
  const data = await client.
    post("gums", {
      json: {
        type: "plain",
        content: content.value,
      },
    }).
    json();
  sessionStorage.removeItem("chew-content");
  router.replace(`/result/${data._id}`);
}

onMounted(() => {
  const savedContent = sessionStorage.getItem("chew-content");
  if (savedContent) {
    content.value = savedContent;
  }
});
</script>
