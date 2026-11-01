import { IonImg, IonItem, IonLabel, IonList, IonListHeader, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contato</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contato</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonListHeader>
            <IonLabel className='header_contatos'>Meios de me contatar:</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Telefone: (19) 98472-6153</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>E-mail: gabriel.monteiro98@example.com</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Instagram: @gabriel.monteiro98a</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Contato alternativo: gabriel.henrique.contato@example.com</IonLabel>
          </IonItem>
        </IonList>
        <IonImg
          src="https://png.pngtree.com/png-vector/20251108/ourlarge/pngtree-vintage-with-a-beautiful-woman-on-phone-in-realistic-1950s-png-image_17912381.webp"
          alt="Foto genérica de contato" className='img_telefone'
        ></IonImg>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
