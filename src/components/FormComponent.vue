<template>
  <v-container>
    <v-card :height="height" :width="width" class="mt-3">
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit" class="ml-6 mr-6">
          <validation-provider
            v-slot="{ errors }"
            :name="field.label"
            :rules="field.rules"
            :key="field.id"
            v-for="field in fields"
          >
            <v-text-field
              v-if="isEdit && (field.key === 'ra' || field.key === 'cpf')"
              disabled
              v-model="form[field.key]"
              :counter="field.counter ? field.counter : 100"
              :error-messages="errors"
              :label="field.label"
              :required="field.required"
              v-mask="field.mask ? field.mask : ''"
            ></v-text-field>
            <v-text-field
              v-else
              v-model="form[field.key]"
              :counter="field.counter ? field.counter : 100"
              :error-messages="errors"
              :label="field.label"
              :required="field.required"
              v-mask="field.mask ? field.mask : ''"
            ></v-text-field>
          </validation-provider>
          <v-btn class="mr-4" type="submit" :disabled="invalid"> Salvar </v-btn>
          <v-btn @click="clear"> Cancelar </v-btn>
        </form>
      </validation-observer>
    </v-card>
  </v-container>
</template>

<script>
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import { required, email, regex } from "vee-validate/dist/rules";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "É obrigatório o preenchimento do {_field_}",
});

extend("regex", {
  ...regex,
  message: "O {_field_} {_value_} Não está de acordo com o formato CPF",
});

extend("email", {
  ...email,
  message: "Deve ser um e-mail válido",
});

export default {
  name: "FormComponent",
  props: {
    formData: {
      type: Object,
      required: true,
    },
    isEdit: {
      type: Boolean,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
    height:{
      type: String,
      required: true,
    },
    width:{
      type: String,
      required: true,
    },
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    form: {},
  }),

  mounted() {
    this.form = this.formData;
  },

  methods: {
    async submit() {
      const isValid = await this.$refs.observer.validate();
      if (isValid) {
        this.$emit("submit", this.form);
      }
      this.$refs.observer.reset();
    },
    clear() {
      this.form = {};
      this.$refs.observer.reset();
      this.$router.go()
    },
  },
};
</script>