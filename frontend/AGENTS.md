<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the product catalog in a shared static module and reuse product cards across storefront and detail pages; this keeps sample data consistent.
- Keep demo shopping state in a root-scoped React context without persistence; the project is frontend-only and does not place real orders.
- Use separate TanStack file routes for catalog, product details, cart and selling; each view must be directly navigable with its own metadata.
- Express visual styling with Tailwind utilities mapped to semantic tokens in the global stylesheet; no separate styling library is needed.
