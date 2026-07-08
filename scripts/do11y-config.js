window.Do11yConfig = {
  framework: 'mintlify',
  destination: 'otlp',

  supabaseUrl: 'https://jhyelfdzatnuebggtnwj.supabase.co',
  supabaseKey: 'sb_publishable_HEBOG0yBbyznVe589OarEA_I_4msl3d',
  supabaseTable: 'do11y_integration_test',

  otlpEndpoint: 'https://otlp-gateway-prod-eu-central-0.grafana.net/otlp',
  otlpHeaders:  { 'Authorization': 'Basic MTcxNTQ1ODpnbGNfZXlKdklqb2lNVGd6Tmpnek1DSXNJbTRpT2lKa2J6RXhlUzEwWlhOMElpd2lheUk2SW5sSFp6QTJWVWxMYzFaalVqWTNNV2t3Y21ZNU5FazVNaUlzSW0waU9uc2ljaUk2SW5CeWIyUXRaWFV0WTJWdWRISmhiQzB3SW4xOQ==' },

  httpEndpoint: 'https://ingestion.eu.bronto.io',
  httpHeaders: { 'X-Bronto-Api-Key': 'b878f30e-441e-4a23-be07-430ca905b039.-Amc6mfAkKDYF_f3oGxU5I4DMqLlrpDhhxxHuH2_sbU=' },

  allowedDomains: null,
  respectDNT: false,
  debug: true,
};
