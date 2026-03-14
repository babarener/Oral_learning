import type { Scenario } from '../../models/types';

export const clinicScenario: Scenario = {
  id: 'clinic',
  label: 'Clinic',
  description: 'Visual support for clinic communication',
  cover: {
    id: 'cover-clinic',
    image: '/images/clinic/cover-clinic.png',
    audio: '/audio/mock/clinic.mp3',
    alt: 'Clinic',
  },
  stages: [
    {
      id: 'body-part',
      type: 'selector',
      title: 'Where do you feel bad?',
      helperText: 'Click one body part',
      selectionMode: 'single',
      nextStageId: 'symptoms',
      items: [
        {
          id: 'head',
          label: 'Head',
          asset: {
            id: 'asset-head',
            image: '/images/clinic/head.png',
            // animation: '🤢',
            audio: '/audio/mock/head.mp3',
            alt: 'Head',
          },
          hotspot: { x: 43, y: 8, w: 14, h: 4 },
        },
        {
          id: 'eyes',
          label: 'Eyes',
          asset: {
            id: 'asset-eyes',
            image: '/images/clinic/eyes.png',
            audio: '/audio/mock/eyes.mp3',
            alt: 'Eyes',
          },
          hotspot: { x: 44, y: 12, w: 12, h: 2 },
        },
        {
          id: 'shoulder',
          label: 'Shoulder',
          asset: {
            id: 'asset-shoulder',
            image: '/images/clinic/shoulder.png',
            audio: '/audio/mock/shoulder.mp3',
            alt: 'Shoulder',
          },
          hotspot: { x: 34, y: 20, w: 8, h: 5 },
        },
        {
          id: 'chest',
          label: 'Chest',
          asset: {
            id: 'asset-chest',
            image: '/images/clinic/chest.png',
            audio: '/audio/mock/chest.mp3',
            alt: 'Chest',
          },
          hotspot: { x: 39, y: 24, w: 8, h: 5 },
        },
        {
          id: 'hand',
          label: 'Hand',
          asset: {
            id: 'asset-hand',
            image: '/images/clinic/hand.png',
            audio: '/audio/mock/hand.mp3',
            alt: 'Hand',
          },
          hotspot: { x: 17, y: 42, w: 9, h: 6 },
        },
        {
          id: 'stomach',
          label: 'Stomach',
          asset: {
            id: 'asset-stomach',
            image: '/images/clinic/stomach.png',
            audio: '/audio/mock/stomach.mp3',
            alt: 'Stomach',
          },
          hotspot: { x: 42, y: 35, w: 16, h: 8 },
        },
        {
          id: 'leg',
          label: 'Leg',
          asset: {
            id: 'asset-leg',
            image: '/images/clinic/leg.png',
            audio: '/audio/mock/leg.mp3',
            alt: 'Leg',
          },
          hotspot: { x: 39, y: 58, w: 22, h: 30 },
        },
      ],
    },
    {
      id: 'symptoms',
      type: 'selector',
      title: 'What do you feel?',
      helperText: 'Select one or more',
      selectionMode: 'multi',
      nextStageId: 'recommendations',
      items: [
        {
          id: 'stomachache',
          label: 'Stomachache',
          asset: {
            id: 'asset-stomachache',
            image: '/images/clinic/stomachache.png',
            animation: '🤢',
            audio: '/audio/mock/stomachache.mp3',
          },
        },
        {
          id: 'fever',
          label: 'Fever',
          asset: {
            id: 'asset-fever',
            image: '/images/clinic/fever.png',
            animation: '🌡️',
            audio: '/audio/mock/fever.mp3',
          },
        },
        {
          id: 'headache',
          label: 'Headache',
          asset: {
            id: 'asset-headache',
            image: '/images/clinic/headache.png',
            animation: '🤕',
            audio: '/audio/mock/headache.mp3',
          },
        },
        {
          id: 'diarrhea',
          label: 'Diarrhea',
          asset: {
            id: 'asset-diarrhea',
            image: '/images/clinic/diarrhea.png',
            animation: '🚻',
            audio: '/audio/mock/diarrhea.mp3',
          },
        },
        {
          id: 'cough',
          label: 'Cough',
          asset: {
            id: 'asset-cough',
            image: '/images/clinic/cough.png',
            animation: '😷',
            audio: '/audio/mock/cough.mp3',
          },
        },
        {
          id: 'pain',
          label: 'Pain',
          asset: {
            id: 'asset-pain',
            image: '/images/clinic/pain.png',
            animation: '⚡',
            audio: '/audio/mock/pain.mp3',
          },
        },
      ],
    },
    {
      id: 'recommendations',
      type: 'result',
      title: 'Supportive next steps',
      helperText: 'These are practical suggestions in clinic context.',
    },
  ],
  recommendations: [
    {
      id: 'medicine',
      label: 'Medicine',
      asset: {
        id: 'recommend-medicine',
        image: '/images/clinic/recommend-medicine.png',
        audio: '/audio/mock/medicine.mp3',
        alt: 'Medicine',
      },
    },
    {
      id: 'drink_water',
      label: 'Drink Water',
      asset: {
        id: 'recommend-water',
        image: '/images/clinic/recommend-water.png',
        audio: '/audio/mock/drink_water.mp3',
        alt: 'Drink water',
      },
    },
    {
      id: 'rest',
      label: 'Rest',
      asset: {
        id: 'recommend-rest',
        image: '/images/clinic/recommend-rest.png',
        audio: '/audio/mock/rest.mp3',
        alt: 'Rest',
      },
    },
    {
      id: 'injection',
      label: 'Injection',
      asset: {
        id: 'recommend-injection',
        image: '/images/clinic/recommend-injection.png',
        audio: '/audio/mock/injection.mp3',
        alt: 'Injection',
      },
    },
    {
      id: 'wait',
      label: 'Wait',
      asset: {
        id: 'recommend-wait',
        image: '/images/clinic/recommend-wait.png',
        audio: '/audio/mock/wait.mp3',
        alt: 'Wait',
      },
    },
    {
      id: 'treatment',
      label: 'Treatment',
      asset: {
        id: 'recommend-treatment',
        image: '/images/clinic/recommend-treatment.png',
        audio: '/audio/mock/treatment.mp3',
        alt: 'Treatment',
      },
    },
  ],
};
