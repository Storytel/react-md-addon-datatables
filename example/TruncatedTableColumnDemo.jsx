import { TruncatedTableColumn } from '../src';
import React from 'react';
import {
  Paper,
  FontIcon,
  Card,
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
} from 'react-md';

export default () => (
  <div>
    <h2>Truncated Table Column</h2>
    <Paper>
      <p>
        <code>TruncatedTableColumn</code> can be used as a drop in replacement for the <code>TableColumn</code>
        available from <em>react-md</em>.
      </p>

      <p>
        Content which are wider than the column will be <em>truncated</em> and have a <em>tooltip added</em>.
      </p>

      <p>
        Since table columns naturally expand to the width of the content, you must set the widths
        (e.g. using the <code>propotional-table</code> and <code>column-widths</code> mixins) of the column.
      </p>

      <p>
        <em>Resize your browser window</em> and hover the truncated columns to see the effect.
      </p>

      <Card tableCard={true}>
        <DataTable baseId="example-table" uncheckedIcon={<FontIcon></FontIcon>}>
          <TableBody>

            <TableRow>
              <TruncatedTableColumn>He was swimming in a sea of other people’s expectations. Men had drowned in seas like that.</TruncatedTableColumn>
              <TruncatedTableColumn>As the Wheel of Time turns, places wear many names. Men wear many names, many faces. Different faces, but always the same man. Yet no one knows the Great Pattern the Wheel weaves, or even the Pattern of an Age. We can only watch, and study, and hope.</TruncatedTableColumn>
              <TruncatedTableColumn>Blood and ashes.</TruncatedTableColumn>
            </TableRow>

            <TableRow>
              <TruncatedTableColumn>Lorem ipsum dolor sit amet.</TruncatedTableColumn>
              <TruncatedTableColumn>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacus quam, feugiat in ante id, venenatis suscipit erat. Phasellus tellus magna, sollicitudin et viverra quis, mattis vel massa. Maecenas fermentum tortor sed.</TruncatedTableColumn>
              <TruncatedTableColumn>Lorem ipsum.</TruncatedTableColumn>
            </TableRow>

            <TableRow>
              <TruncatedTableColumn>Lorem ipsum.</TruncatedTableColumn>
              <TruncatedTableColumn>Lorem ipsum.</TruncatedTableColumn>
              <TruncatedTableColumn>Lorem ipsum.</TruncatedTableColumn>
            </TableRow>

            <TableRow>
              <TruncatedTableColumn>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacus quam, feugiat in ante id, venenatis suscipit erat. Phasellus tellus magna, sollicitudin et viverra quis, mattis vel massa. Maecenas fermentum tortor sed.</TruncatedTableColumn>
              <TruncatedTableColumn>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacus quam, feugiat in ante id, venenatis suscipit erat. Phasellus tellus magna, sollicitudin et viverra quis, mattis vel massa. Maecenas fermentum tortor sed.</TruncatedTableColumn>
              <TruncatedTableColumn>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacus quam, feugiat in ante id, venenatis suscipit erat. Phasellus tellus magna, sollicitudin et viverra quis, mattis vel massa. Maecenas fermentum tortor sed.</TruncatedTableColumn>
            </TableRow>

          </TableBody>
        </DataTable>
      </Card>
    </Paper>
  </div>
)
