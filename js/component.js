var headers = [
  'Book',
  'Author',
  'Language',
  'Published',
  'Sales'
];

var data = [
  [
    'The Lord of the Rings',
    'J.R.R. Tolkien',
    'English',
    '1954-1955',
    '150 Million'
  ],
  [
    'Le Petit Prince',
    'Antoine de Saint-Exupery',
    'French',
    '1943',
    '140 Million'
  ]
];

var Excel = React.createClass({
  displayName: 'Excel',
  getInitialState: function() {
    return {
      data: this.props.initialData
    };
  },
  render: function() {
    return (
    React.DOM.table(null,
      React.DOM.thead(null,
        React.DOM.tr(null, this.props.headers.map(function(title, idx) {
          return React.DOM.th({
            key: idx
          }, title);
        })
        )
      ),
      React.DOM.tbody(null, this.state.data.map(function(row) {
        return (
        React.DOM.tr(null,
          row.map(function(cell) {
            return React.DOM.td(null, cell);
          })
        )
        );
      }))
    )
    );
  }
});

ReactDOM.render(
  React.createElement(Excel, {
    headers: headers,
    initialData: data
  }),
  document.getElementById('app')
);