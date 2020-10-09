/** Convert Unix time to date format */
export function convertUnixToDuration(when: number): string {
  const minutes: number = when / 60000
  console.log(minutes)
  if (minutes > 60) {
    const hours: number = minutes / 60
    console.log(hours)
    if (hours > 24) {
      const days: number = hours / 24
      console.log(days)
      if (days > 30) {
        return new Date(this.when).toString()
      }
      return `${Math.floor(days)} days ago`
    }
    return `${Math.floor(hours)} hours ago`
  }
  if (Math.floor(minutes) > 0 ) {
    return `${Math.floor(minutes)} minutes ago`
  } else
    return `${Math.floor(when/1000)} seconds ago`
}
