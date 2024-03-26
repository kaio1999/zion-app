module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  rules: {
    // Estas são apenas algumas configurações de exemplo. Sinta-se à vontade para ajustar de acordo com suas preferências.

    // Evitar console.log em produção
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Proibir uso de funções globais específicas
    'no-restricted-globals': ['error', 'event', 'fdescribe'],

    // Definir tamanho máximo de linha
    'max-len': ['error', { code: 100, tabWidth: 2, ignoreUrls: true }],

    // Forçar aspas simples
    quotes: ['error', 'single'],

    // Proibir variáveis não utilizadas
    'no-unused-vars': 'error',

    // Proibir uso de funções não utilizadas
    'no-unused-expressions': 'error',

    // Permitir reatribuição de parâmetros de função
    'no-param-reassign': ['error', { props: false }],

    // Permitir variáveis que começam com underscore em escopos não utilizados
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
}
