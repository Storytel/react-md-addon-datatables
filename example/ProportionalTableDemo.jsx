import React from 'react';
import { Paper } from 'react-md';

const proportional =
`@import '~react-md-addon-datatables/index'

#my-table {
  @include proportional-table();
  @include column-widths((20, 50, 10, 30, 0));
}`;

const mediaQueries =
`@import '~react-md-addon-datatables/index'

#my-table {
  @include proportional-table();

  @media (min-width: 1024px) {
    @include column-widths(( 25 25 25 25 ));
  }

  @media (max-width: 1024px) {
    @include column-widths(( 25 0 0 25 ));
  }
}`

export default () => (
  <div>
    <h2>Proportional Table</h2>
    <Paper>
      <p>
        A <a href="http://sass-lang.com" target="_blank">Sass</a> mixin for deciding widths of tables.
        Works great with <code>TruncatedTableColumn</code>
      </p>

      <div className="code">{proportional}</div>

      <p>This creates a table where columns are scaled proportionally. E.g. the first column will get a width of</p>
      <div className="code">20 / (20 + 50 + 10 + 30 + 0) = 20%</div>
      <p>
        This works the same way <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow" target="_blank">flex-grow</a> does.
      </p>

      <p>
        The numbers does not need to add up to 100, they will take a proportional amount of space with regards to the
        sum of all numbers. For instance, <code>@include column-widths(30, 12)</code> will take <code>~71%</code> and <code>~29%</code> respectively.
      </p>

      <p>Putting <code>0</code> will remove that column all together (using <code>display: none</code>).</p>
      <p>This is very useful
        with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" target="_blank">media queries</a> where
        less important columns can be removed if screen real-estate is scarce.
      </p>
      <div className="code">{mediaQueries}</div>
      <p>
        If the width of the table exceeds <code>1024px</code>,
        it will show all 4 columns. Otherwise column 2 and 3 are removed. Note that column 1 and 4 will
        take <code>50%</code> of the available space each.
      </p>

    </Paper>
  </div>
)
