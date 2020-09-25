function awaitTo (promise) {
  return promise
    .then(data => [null, data])
    .catch(err => [err, null])
}

function abc () {
  return awaitTo(promise(false))
}

function promise (bool) {
  return new Promise((resolve, reject) => {
    if (bool) resolve('true')
    else reject('false')
  })
}

async function def () {
  const res = await abc()
  console.log(res);
}

def()