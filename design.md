width 750
body [
  img "https://dummyimage.com/600x400/000/fff"
  -
  cols
    col [
      img "https://dummyimage.com/300x200/000/fff"
      txt "This is a title"
      txt "{{ $col1->body }}"
    ]
    col [
      img "https://dummyimage.com/300x200/000/fff"
      txt "This is another title"
      txt "{{ $col2->body }}"
    ]
  row [
    txt "This is another title"
    txt "{{ $row->body }}"
  ]
  -
  row [
    txt "Copyright 2023"
  ]
]