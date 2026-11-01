import { IonAvatar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="cabecalho">
        <IonToolbar>
          <IonTitle>Apresentação</IonTitle>
        </IonToolbar>
        <IonAvatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Titulo do Cartão</IonCardTitle>
        <IonCardSubtitle>Subtítulo do Cartão</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Pequena descrição do cartão.</IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
