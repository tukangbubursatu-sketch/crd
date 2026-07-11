# Retry Pipeline

- Jika API gagal, retry dengan backoff.
- Jika render video gagal, gunakan fallback template.
- Jika publish gagal, ulangi setelah cek koneksi dan kredensial.
