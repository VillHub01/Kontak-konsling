<!-- /admin/js/supabase.js -->
<script>
  // ✅ Supabase credentials
  const SUPABASE_URL = 'https://kgwiguriiwhlxpslzkop.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnd2lndXJpaXdobHhwc2x6a29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MjQ2OTEsImV4cCI6MjA3MjQwMDY5MX0.KIqt7ZEUwlBkqrpAVSDdxqvEG9bjmtMLOUqh7XF157M';

  (function(){
    if(window.supabase) return window.supabase;

    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/supabase.min.js';
    s.onload = function(){
      window.supabase = supabaseJs.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log("✅ Supabase connected:", window.supabase);
    };
    document.head.appendChild(s);
  })();
</script>