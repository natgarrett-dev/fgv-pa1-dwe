<template>
  <div class="contador">
    <h2 :class="parOuImparClass">{{ count }}</h2>

    <div class="botoes">
      <button @click="decrementar" :disabled="count === 0">-</button>
      <button @click="incrementar">+</button>
    </div>

    <p class="info">O número é: <strong>{{ parOuImpar }}</strong></p>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineProps, defineEmits } from "vue";

// Recebe valor inicial como prop
const props = defineProps({
  initialValue: {
    type: Number,
    required: true,
    default: 0,
  },
});

// Emit para notificar o valor atualizado
const emit = defineEmits(["update:valor"]);

// Estado reativo
const count = ref(props.initialValue);

// Computed: verifica se é par ou ímpar
const parOuImpar = computed(() => (count.value % 2 === 0 ? "Par" : "Ímpar"));

// Computed para aplicar classes no número
const parOuImparClass = computed(() =>
  count.value % 2 === 0 ? "par" : "impar"
);

// Função para incrementar
function incrementar() {
  count.value++;
  emit("update:valor", count.value);
}

// Função para decrementar (sem ficar negativo)
function decrementar() {
  if (count.value > 0) {
    count.value--;
    emit("update:valor", count.value);
  }
}

// Watch para alertar quando chegar a 10
watch(count, (novoValor) => {
  if (novoValor === 10) {
    alert("Você chegou a 10!");
  }
});
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

.contador {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  padding: 15px;
  gap: 12px;
  border: 2px solid #ddd; 
  border-radius: 10px;
}

h2 {
  font-size: 3rem;
  margin: 0;
}

.par {
  color: #22c55e;
}

.impar {
  color: #3b82f6;
}

.botoes {
  display: flex;
  gap: 5px;
}

button {
  background: transparent;
  border: 1px solid #ccc;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover:not(:disabled) {
  border-color: black;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.info {
  font-size: 1rem;
  color: #555;
}
</style>
