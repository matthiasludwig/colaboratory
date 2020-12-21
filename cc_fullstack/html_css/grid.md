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

## Advanced CSS Grid

```css
.container {
grid-template-areas: "head head"
                     "nav nav"
                     "info services"
                     "footer footer";
grid-template-rows: 300px 120px 800px 120px;
grid-template-columns: 1fr 3fr;
}
header {
    grid-area: head;
}
.info {
    grid-area: info;
}

```

**Example of a two column, four rows layout.**

* Additionally we can let areas overlap and define the overlap via the `z-index: val;` property.
* `justify-items: start | end | center | stretch`: positions items along the rows
* `justify-content: start | end | center | stretch | space-around | space-between | ace-evenly`: how to position an element within it's parent element
* `align-items: start | end | center | stretch`: positions items along the columns
* `align-content: start | end | center | stretch | space-around | space-between | ace-evenly`: positions the rows along the column axis, from top to bottom
* `justify-self: start | end | center | stretch`: How should **the element** position itself with respect to the row
* `align-self: start | end | center | stretch`: How should **the element** position itself with respect to the column

### Implicit Grid Declaration**

* `grid-auto-rows: val`: If new items are added to the design how should the "new" rows look like
* `grid-auto-columns: val`: If new columns are added to the design how should the "new" columns look like
* `grid-auto-flow: row | column | dense`: specifies wether new elemetns should be added as rows or columns

### Additional Ressources

* [Complete Guid to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [Things I've learned about CSS Grid Layout](https://css-tricks.com/things-ive-learned-css-grid-layout/)
