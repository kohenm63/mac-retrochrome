
(function () {
  if (document.getElementById('mac-top-bar')) return;

  const bar = document.createElement('div');
  bar.id = 'mac-top-bar';
  bar.innerHTML = '<span></span><span>File</span><span>Edit</span><span>View</span><span>Window</span><span>Help</span>';
  document.body.prepend(bar);
  document.body.style.paddingTop = '28px';
})();
