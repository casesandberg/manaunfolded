import { Card } from './Card'

export default function NotFoundGrid() {
  return (
    <div className="my-8 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
      <Card className="opacity-25"></Card>
      <Card className="opacity-50 md:hidden"></Card>
      <Card className="col-span-2 md:flex lg:hidden">
        <div className="text-center text-foreground-light">User not found</div>
      </Card>
      <Card className="col-span-2 opacity-50 md:hidden lg:flex"></Card>
      <Card className="hidden opacity-25 md:flex"></Card>
      <Card className="opacity-75"></Card>
      <Card className="row-span-2 flex flex-col opacity-50"></Card>
      <Card className="row-span-2 opacity-50"></Card>
      <Card className="opacity-25"></Card>
      <Card className="col-span-2 hidden md:hidden lg:flex">
        <div className="text-center text-foreground-light">User not found</div>
      </Card>
      <Card className="opacity-75"></Card>
      <Card className="opacity-75"></Card>
      <Card className="row-span-2 opacity-25"></Card>
      <Card className="col-span-2 hidden opacity-50 md:flex"></Card>
      <Card className="opacity-75 "></Card>
      <Card className="opacity-50 md:hidden"></Card>
      <Card className="col-span-2 opacity-25 md:hidden"></Card>
      <Card className="col-span-2 opacity-50"></Card>
      <Card className="hidden opacity-75 md:flex"></Card>
      <Card className="col-span-2 opacity-25"></Card>
      <Card className="col-span-2 hidden opacity-75 md:flex lg:hidden"></Card>
    </div>
  )
}
