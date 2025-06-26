/**
 * Waits for a number of milliseconds.
 *
 * @param milliseconds The number of milliseconds to wait.
 * @returns Resolves with 'done!' after the wait is over.
 */
export async function wait(milliseconds: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (isNaN(milliseconds)) {
      reject(new Error('milliseconds is not a number'))
      return
    }

    setTimeout(() => resolve('done!'), milliseconds)
  })
}
