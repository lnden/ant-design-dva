import React from 'react'
import classMames from 'classnames'
import styles from './index.module.less'

const GlobalFooter = ({className, links, copyright}) => {
    console.log(className,1111)
    const clsString = classMames(styles.globalFooter, className);
    return (
        <div className={clsString}>
            {links && (
                <div className={styles.links}>
                    {links.map(link => (
                        <a key={link.key}
                           target={link.blankTarget ? '_blank' : '_self'}
                           href={link.href}>
                            {link.title}
                        </a>
                    ))}
                </div>
            )}
            {copyright && <div className={styles.copyright}>{copyright}</div>}
        </div>
    )
};

export default GlobalFooter
