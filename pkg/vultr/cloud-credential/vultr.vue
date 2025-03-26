<script>
import { parse as parseUrl } from '@shell/utils/url';
import Banner from '@components/Banner/Banner.vue';
import { LabeledInput } from '@components/Form/LabeledInput';
import LabeledSelect from '@shell/components/form/LabeledSelect';
import Checkbox from '@shell/rancher-components/Form/Checkbox/Checkbox.vue';
import { Vultr } from '../vultr.ts';

export default {
  components: {
    Banner,
    LabeledInput,
    LabeledSelect,
    Checkbox,
  },

  props: {
    mode: {
      type:     String,
      required: true,
    },

    value: {
      type:     Object,
      required: true,
    },
  },

  async fetch() {
    this.driver = await this.$store.dispatch('rancher/find', {
      type: 'nodedriver',
      id:   'vultr'
    });
  },

  data() {
    return {
      step:           1,
      busy:           false,
      driver:         {},
    };
  },

  computed: {
    hostname() {
      const u = parseUrl(this.value.decodedData.apiKey);
      return u?.host || '';
    },
  },
};
</script>

<template>
    <div class="row">
      <div class="col span-6"> <!-- VULTR API KEY -->
        <LabeledInput
          :value="value.decodedData.apiKey"
          :disabled="step !== 1"
          label-key="driver.vultr.auth.fields.apiKey"
          placeholder-key="driver.vultr.auth.placeholders.apiKey"
          type="text"
          :mode="mode"
          @update:value="value.setData('apiKey', $event);"
        />
      </div>
    </div>
    <p class="text-muted mt-10">
      Paste in Vultr API Key from your 
      <a href="https://my.vultr.com/settings/#settingsapi" target="_blank">Vultr Account</a>
    </p>
</template>


<style lang="scss" scoped>
  .icon-spacer {
    width: 24px;
  }

  .align-start {
    align-self: flex-start;
  }
</style>
