# React Pages
Simpler React projects with one or a few pages.

## [Recipes #1](https://github.com/levdoescode-practice/react/tree/path-001)
* Simple recipe page design using [React](https://react.dev/) with [shadcn](https://ui.shadcn.com/) components,
[Tailwind](https://tailwindcss.com/) styling and some [TypeScript](https://www.typescriptlang.org/) for recipes.
* Filter by category and individual recipe pages.
* Data from [dummyjson.com](https://dummyjson.com/recipes/)

<small>Images below are static links only</small>
<!-- Full-width images -->
<div class="wide-image">
    <a href="./media/path-001/path-001-01.png" target="_blank">
        <img src="./media/path-001/path-001-01.png" alt="Recipe list" />
    </a>
</div>

<!-- Grid of smaller images -->
<div class="image-grid">
    <a href="./media/path-001/path-001-02.png" target="_blank">
        <img src="./media/path-001/path-001-02.png" alt="Media query medium" />
    </a>
    <a href="./media/path-001/path-001-03.png" target="_blank">
        <img src="./media/path-001/path-001-03.png" alt="Media query small" />
    </a>
    <a href="./media/path-001/path-001-04.png" target="_blank">
        <img src="./media/path-001/path-001-04.png" alt="Filter on" />
    </a>
    <a href="./media/path-001/path-001-05.png" target="_blank">
        <img src="./media/path-001/path-001-05.png" alt="Recipe page" />
    </a>
</div>

<style>
    /* Grid layout for smaller images */
    .image-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .image-grid a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;
        box-sizing: border-box;
    }
    .image-grid img {
        max-width: 100%;
        max-height: 100%;
    }

    /* Full-width layout for wide images */
    .wide-image {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 10px;
    }
    .wide-image img {
        max-width: 100%;
        height: auto;
    }
</style>
