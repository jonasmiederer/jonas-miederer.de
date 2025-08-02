'use client';
import { Link } from "@nextui-org/link";
import Section from "./section";
import { Image } from "@nextui-org/image";

export default function Certification() {

    const providers = [
        [
            {
                title: 'Microsoft Certified: Azure Fundamentals',
                img: 'https://images.credly.com/size/680x680/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
                link: 'https://learn.microsoft.com/api/credentials/share/en-us/JonasMiederer-8663/C4014C89BCC513AF?sharingId=76C45D8E11517B0'
            },
            {
                title: 'Microsoft Certified: Azure Data Fundamentals',
                img: 'https://images.credly.com/size/680x680/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png',
                link: 'https://learn.microsoft.com/api/credentials/share/en-us/JonasMiederer-8663/C4014C89BCC513AF?sharingId=76C45D8E11517B0'
            },
            {
                title: 'Microsoft Certified: Azure AI Fundamentals',
                img: 'https://images.credly.com/size/680x680/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png',
                link: 'https://learn.microsoft.com/api/credentials/share/en-us/JonasMiederer-8663/79C6F8BA4B9F0D02?sharingId=76C45D8E11517B0'
            },
            {
                title: 'Microsoft Certified: Azure Administrator Associate',
                img: 'https://images.credly.com/size/680x680/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png',
                link: 'https://learn.microsoft.com/api/credentials/share/en-us/JonasMiederer-8663/67B21B4008F8C88C?sharingId=76C45D8E11517B0'
            },
            {
                title: 'Microsoft Certified: Azure Security Engineer Associate',
                img: 'https://images.credly.com/size/680x680/images/1ad16b6f-2c71-4a2e-ae74-ec69c4766039/azure-security-engineer-associate600x600.png',
                link: 'https://learn.microsoft.com/api/credentials/share/en-us/JonasMiederer-8663/7F168AE6F99EAC7B?sharingId=76C45D8E11517B0'
            },
            {
                title: 'Microsoft Certified: Azure Developer Associate',
                img: 'https://images.credly.com/size/680x680/images/63316b60-f62d-4e51-aacc-c23cb850089c/azure-developer-associate-600x600.png',
                link: 'https://learn.microsoft.com/api/credentials/share/en-us/JonasMiederer-8663/FBFF184DBAF5617B?sharingId=76C45D8E11517B0'
            },
            {
                title: 'Microsoft Certified: DevOps Engineer Expert',
                img: 'https://images.credly.com/size/680x680/images/c3ab66f8-5d59-4afa-a6c2-0ba30a1989ca/CERT-Expert-DevOps-Engineer-600x600.png',
                link: 'https://learn.microsoft.com/api/credentials/share/en-us/JonasMiederer-8663/99E4D66138EF97AF?sharingId=76C45D8E11517B0'
            },
            {
                title: 'Microsoft Certified: Azure Solutions Architect Expert',
                img: 'https://images.credly.com/size/680x680/images/987adb7e-49be-4e24-b67e-55986bd3fe66/azure-solutions-architect-expert-600x600.png',
                link: 'https://learn.microsoft.com/api/credentials/share/en-us/JonasMiederer-8663/99386FBBAB7CA901?sharingId=76C45D8E11517B0'
            },
        ],
        [
            {
                title: 'AWS Certified Cloud Practitioner',
                img: 'https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
                link: 'https://www.credly.com/badges/6fede625-3053-41a3-ba16-047ee224cfa9/public_url'
            },
            {
                title: 'AWS Certified AI Practitioner',
                img: 'https://images.credly.com/size/220x220/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png',
                link: 'https://www.credly.com/badges/556dce0f-c55d-4acb-8e33-9856de61ce72/public_url'
            },
            {
                title: 'AWS Certified Developer – Associate',
                img: 'https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png',
                link: 'https://www.credly.com/badges/f64ff104-b64a-4a9b-99c0-09397d2cf923/public_url'
            },
            {
                title: 'AWS Certified Solutions Architect – Associate',
                img: 'https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
                link: 'https://www.credly.com/badges/8365ac22-7660-40d0-ab70-fa9f53f761ef/public_url'
            },
            {
                title: 'AWS Certified Solutions Architect – Professional',
                img: 'https://images.credly.com/size/110x110/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png',
                link: 'https://www.credly.com/badges/c64ce7ef-490b-407a-8455-7d4d1156047f/public_url'
            },
        ], [
            {
                title: 'GCP Cloud Digital Leader',
                img: 'https://templates.images.credential.net/16601179376516142147983414073734.png',
                link: 'https://www.credential.net/f6c8d063-257b-4dc6-a68d-b5c5bc75ee79#acc.olW2kQ7i'
            },
            {
                title: 'GCP Associate Cloud Engineer',
                img: 'https://templates.images.credential.net/16590187933301617801540872729153.png',
                link: 'https://www.credential.net/a35f8514-414c-43df-bb2a-0fa3ff7e5b64#acc.J6Ps7QER'
            },

        ]
    ]

    const content =
        <div className="gap-2 flex  flex-col w-full">
            {providers.map((provider, index) => {
                return (
                    <div key={`certlist-${index}`} className="flex w-full flex-wrap gap-2">

                        {provider.map((certification, jndex) => {
                            return (
                                <Link key={`cert-${index}-${jndex}`} href={certification.link} isExternal> 
                                    <Image
                                        key={`cert-${index}-${jndex}`}
                                        alt={certification.title}
                                        className=" max-w-[80px]"
                                        src={certification.img}
                                        isZoomed
                                        removeWrapper
                                        width={80}
                                    />
                                </Link>
                            );

                        })
                        }
                    </div>

                )
            })}
        </div>

    return (
        <Section title="Certification" content={content} />
    )
};