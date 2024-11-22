import Container from './container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { AspectRatio } from './ui/aspect-ratio';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card';

type CameraSectionProps = {
  title: string;
  cameras: CameraProps;
};

type CameraProps = {
  title: string;
  description: string;
  src: string;
  isHwy: boolean;
}[];

const CameraSection = ({ title, cameras }: CameraSectionProps) => {
  return (
    <Container>
      <section className='md:my-8'>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='text-3xl font-bold'>
              {title}
            </AccordionTrigger>
            <AccordionContent className='grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 xl:grid-cols-6'>
              {cameras.map((camera) => (
                <Card key={camera.title}>
                  <div className='flex justify-between gap-8 p-6'>
                    <CardHeader className='flex-shrink-0 p-0'>
                      <CardTitle>{camera.title}</CardTitle>
                      <CardDescription>{camera.description}</CardDescription>
                    </CardHeader>
                  </div>
                  <CardContent>
                    {camera.isHwy ? (
                      <iframe
                        className='h-full w-full min-h-[400px] bg-white'
                        src={camera.src}
                        height={'100%'}
                        width={'100%'}
                        allowFullScreen
                      />
                    ) : (
                      <AspectRatio ratio={16 / 9}>
                        <iframe
                          className='object-cover'
                          src={`${camera.src}?autoplay=false`}
                          height={'100%'}
                          width={'100%'}
                          allowFullScreen
                        />
                      </AspectRatio>
                    )}
                  </CardContent>
                </Card>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </Container>
  );
};

export { CameraSection };
