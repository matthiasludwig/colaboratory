# Grid Layouts

## Grids and Spacing

**Passive Whitespace**: "Unconsidered Space". Can be influence via line-height and margin. It does not guide the user through the content or flow.

**Active Whitespace**: "Intentional". It us used deliberately to emphasise or make the flow clearer to the user.

## CSS Grid

CSS Grid is a two-dimensional way of organizing content (Flexbox is one-dimensional). It is **not** yet universally supported by all browsers.

To setup a grid you need:

* grid-container
* grid-items

CSS code for grid-containers:

* `display: grid`: Display a CSS element as grid-container
* `grid-template-columns: 20% 50%`: Create a two col layout with relative widths
* `grid-template-rows: 10% 20% 600px`: Create a three row layout
* `grid-template: 10% 20% 600px / 20% 50%`: Can be used to combine template-columns and template-rows
* `grid-row-gap: 10px`: Add gutter between rows
* `grid-column-gap: 10px`: Add gutter between columns
* `grid-gap: 10px 10px`: Can set rows and columns gutter at the same time

CSS code for grid-items:

* `grid-row-start: 5`: Which row an item should start
* `grid-row-end: 7`The row +1 where the item should end
* `grid-row: 5 / 7` Shorthand for grid-row-start and grid-row-end
* `grid-column-start: 4`: Similiar to the row counterpart; Beginning of the col
* `grid-column-end: 7`: Similiar to the row counterart; End of the col
* `grid-column: 4 / span 2`: Similiar to grid-row counterpart. With span we can define how many columns the col should span
* `grid-area: row-start / col-start / row-end / col-end`