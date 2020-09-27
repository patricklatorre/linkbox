# 🔗📦 Linkbox

Client-side only URL redirector. Supports subpath forwarding and fuzzy matching. 

Syntax: `domain.com/<keyword>/[subpaths]`

### Example:

```
linkbox({
  '/github': 'https://github.com',
  '/mail': 'https://mail.google.com/mail/u',
  '/chainpop': 'https://chainpop.herokuapp.com',
});
```

`domain.com/github` --> https://github.com

`domain.com/g` --> https://github.com

`domain.com/g/new` --> https://github.com/new

`domain.com/c/xxxx` --> https://chainpop.herokuapp.com/xxxx

`domain.com/pop/xxxx` --> https://chainpop.herokuapp.com/xxxx

`domain.com/g/patricklatorre` --> https://github.com/patricklatorre

`domain.com/m/1` --> https://mail.google.com/mail/u/1

---

### `npm run build`

Build static files for production.

