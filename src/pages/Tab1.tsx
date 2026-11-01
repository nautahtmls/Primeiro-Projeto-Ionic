import { IonImg, IonAvatar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="cabecalho">
          <IonTitle>Apresentação</IonTitle>
        </IonToolbar>

      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Apresentação</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
      <IonCardHeader className='cabecalho_card'>
          <IonAvatar className='img_gabriel'>
            <img alt="Foto da Pessoa" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
        <IonCardTitle>Gabriel Henrique Monteiro da Silva</IonCardTitle>
        <IonCardSubtitle>17/08/1998</IonCardSubtitle>
        <IonCardSubtitle>Rua das Acácias, 247, Jardim Primavera, Campinas – SP, CEP 13045-210.</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Meu nome é Gabriel Henrique Monteiro da Silva, tenho 28 anos e nasci em 17 de agosto de 1998. Moro em Campinas, São Paulo. Sou uma pessoa tranquila, observadora e dedicada. Gosto de tecnologia, música, filmes e videogames. No meu tempo livre, gosto de sair com amigos e conhecer lugares novos. Procuro sempre aprender coisas novas, crescer profissionalmente e conquistar minha independência financeira.</IonCardContent>
    </IonCard>
    <IonImg className='img_paisagem'
      src="https://i.pinimg.com/236x/e7/e6/6a/e7e66aa3e4c4117a8d89fd23da9a6ecd.jpg"
      alt="Paisagem qualquer"
    ></IonImg>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
