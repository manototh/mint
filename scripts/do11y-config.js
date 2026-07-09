window.Do11yConfig = {
  framework: 'mintlify',
  destination: 'otlp',

  supabaseUrl: 'https://jhyelfdzatnuebggtnwj.supabase.co',
  supabaseKey: 'sb_publishable_HEBOG0yBbyznVe589OarEA_I_4msl3d',
  supabaseTable: 'do11y_integration_test',

  otelSdkEndpoint: 'https://do11y-otel-proxy.manototh.workers.dev',
  otelSdkServiceName: 'do11y-test',

  endpoint: 'https://ingestion.eu.bronto.io',
  headers: { 'X-Bronto-Api-Key': 'b878f30e-441e-4a23-be07-430ca905b039.-Amc6mfAkKDYF_f3oGxU5I4DMqLlrpDhhxxHuH2_sbU=' },

  allowedDomains: null,
  respectDNT: false,
  debug: true,
};
