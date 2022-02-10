const item = document.querySelector('.item')

const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart (e) {
  e.target.classList.add('hold')
  setTimeout(() => e.target.classList.add('hide'), 0)
}
function dragend (e) {
  e.target.className = 'item'
}

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover)
}

function dragover (e) {
  console.log('over', e)
  // e.preventDefault()
}

function dragenter (e) {
  console.log('enter')
  // e.target.classList.add('hovered')
}

function dragleave (e) {
  console.log('le')
  // e.target.classList.remove('hovered')
}

function dragdrop (e) {
  console.log('drop')
  // e.target.classList.remove('hovered')
  // e.target.append(item)
}
